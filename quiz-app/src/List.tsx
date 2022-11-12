import "./App.css";
type ListProps = {
    details: {
        correct: number;
        handleClick: (i: number) => void;
        optionNum: number;
        option: string;
        style: {};
    };
};
export const List = ({
    details: { handleClick, optionNum, option, style },
}: ListProps) => (
    <div className="list">
        <li style={style} onClick={() => handleClick(optionNum)}>
            {option}
        </li>
    </div>
);
