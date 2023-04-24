import { useMemo } from "react";

const DemoList = (props) => {
    const {items, reverse} = props;

    const sortedList = useMemo(() => {
        if(reverse) {
            return items.sort((a, b) => b - a);
        }
        return items.sort((a, b) => a - b);
    }, [items, reverse]);

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default DemoList;