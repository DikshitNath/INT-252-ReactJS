

export default function TodoList( props ) {
  return (
    <div>
        <ol>
            {
            (props.todos.length === 0) ? 
                <p>No tasks added yet.</p> 
                :
                <div>
                    <h2>All tasks:</h2>
                    {props.todos.map((todo, index) => 
                    <li className="list-decimal ml-4" key={index}>{todo}</li>
                    )}
                </div>
            }
        </ol>
    </div>
  );
}
