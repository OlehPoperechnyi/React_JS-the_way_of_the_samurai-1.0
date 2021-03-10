import * as React from "react";


class UserDescription extends React.Component {
    state = {
        editMode: false
    }
    changeEditMode = () => {
        let editMode = this.state.editMode;
        editMode
            ?editMode = false
            :editMode = true
        this.setState({ editMode: editMode});
    }

    render() {
        return <div>
            {this.state.editMode
                ?<div>
                <textarea autoFocus={true} onBlur={this.changeEditMode} value = {this.props.description} />
                </div>
                :<div>
                    <span onDoubleClick={this.changeEditMode}>{this.props.description}</span>
                </div>
            }

        </div>
    }
}

export default  UserDescription;