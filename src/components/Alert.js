export const Alert = (props) => {
  const capitalize = (word) => {
    const newText = word.toLowerCase();
    return newText.charAt(0).toUpperCase() + newText.slice(1);
  }  
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)} : </strong> {props.alert.message}
      </div>}
    </div>
  )
}

