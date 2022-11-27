import React from "react";

export const PostWrapper = (WrappedComponent, url) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
            };
        }
        componentDidMount() {
            (async () => {
                try {
                    const res = await fetch(`${url}`);
                    if (!res.ok) throw Error("Unable to fetch data");
                    const data = await res.json();
                    this.setState((prev) => ({ ...prev, data }));
                } catch (error) {
                    console.error(error);
                }
            })();
        }
        render() {
            return (
                <div>
                    <WrappedComponent data={this.state?.data} />
                </div>
            );
        }
    };
};
