// Created by David Walshe on 23/02/2020

// Created by David Walshe on 23/02/2020

class IndecisionApp extends React.Component {


    // Life-cycle Method
    constructor(props) {
        super(props);
        // Reattach bindings
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        // Set init state.
        this.state = {
            options: props.options
        }
    }

    // Reload app data on mount
    componentDidMount() {

        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }

    }

    // Persist app data on a user update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        console.log("saving data");
    }

    componentWillUnmount() {
        console.log("componentWIllUnmount");
    }


    // Removes all options
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    // Removes a single option
    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }));
    }

    // Adds an option
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
            })
        )
    }

    // Selects a item in the array.
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        alert(option);
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a machine";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOptionSingular}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

// Assign default props to Indecision Component
IndecisionApp.defaultProps = {
    options: ["Thing one", "Thing two", "Thing three"]
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

// Assign default props to Header Component
Header.defaultProps = {
    title: "some default"
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all options</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <p>Length = {props.options.length}</p>
        </div>
    )
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>
                remove
            </button>
        </div>
    )
};


class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = ({error: undefined});
    }


    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        // Clear input when item is valid.
        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="type" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp options={["Thing one", "Thing two", "Thing three"]}/>, document.getElementById("app"));