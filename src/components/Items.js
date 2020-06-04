import React from 'react';

const Item = (props) => {
  let icon;
  let {status, _id, text} = props.info;

  if(status) icon = <span>&#9997;</span>;
  else icon =<span>&#10006;</span>;

  return(
    <>
     <div className={status ? 'to-dos' : 'to-dones'}>
      <p>{text}</p>
      <button>
        {icon}
      </button>
     </div>
    </>
  )
}

export default Item;