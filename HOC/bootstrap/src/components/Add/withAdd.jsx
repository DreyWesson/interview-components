import React from "react";

export const withAdd = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return (
                <div>
                    <WrappedComponent a={2} b={3} />
                </div>
            );
        }
    };
};
