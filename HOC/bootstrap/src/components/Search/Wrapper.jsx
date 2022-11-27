import React from "react";

export const Wrapper = (WrappedComponent, entity) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                term: "",
            };
        }
        componentDidMount() {
            (async () => {
                try {
                    const res = await fetch(
                        `https://jsonplaceholder.typicode.com/${entity}`
                    );
                    if (!res.ok) throw Error("Unable to fetch data");
                    const data = await res.json();
                    this.setState((prev) => ({ ...prev, data }));
                } catch (error) {
                    console.error(error);
                }
            })();
        }
        render() {
            const { data, term } = this.state;
            const filteredData = data?.slice(0, 10).filter((item) => {
                if (entity === "users") {
                    const { name } = item;
                    return name?.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                } else {
                    const { title } = item;
                    return (
                        title?.toLowerCase().indexOf(term.toLowerCase()) >= 0
                    );
                }
            });
            return (
                <div>
                    <label htmlFor="search" style={{ marginRight: "10px" }}>
                        Search
                    </label>
                    <input
                        type="text"
                        name="search"
                        onChange={(e) =>
                            this.setState({
                                ...this.state,
                                term: e.target.value,
                            })
                        }
                    />
                    <WrappedComponent data={filteredData} />
                </div>
            );
        }
    };
};
