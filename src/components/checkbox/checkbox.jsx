import { useState } from "react";

const Checkbox = ({ initialState, setTodoList, worker, subwork }) => {
    const [checked, setChecked] = useState(initialState);

    const onClick = (checkboxChecked) => {
        setChecked(checkboxChecked);
        if (worker === 'constructionWorker') {
            setTodoList(todoList => {
                const _todoList = { ...todoList }
                _todoList.tasks.room[worker].job[subwork].completed = checkboxChecked
                return _todoList
            })

        } else {
            setTodoList(todoList => {
                const _todoList = { ...todoList }
                _todoList.tasks.room[worker].completed = checkboxChecked
                return _todoList
            })
        }

        // onChange(id, checked);
    }
    return (<input
        type="checkbox"
        onChange={e => onClick(e.target.checked)}
        checked={checked}
    />
    )
}
export default Checkbox
