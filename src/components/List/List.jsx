import React, { Component, memo } from "react";
import "./List.css";
import { FixedSizeList, areEqual } from "react-window";

// If list items are expensive to render,
// Consider using React.memo or shouldComponentUpdate to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactmemo
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = memo(({ data, index, style }) => {
  const user = data[index];
  const { name, email, profile_pic, status, user_id } = user;
  return (
    <div className="User">
      <img src={profile_pic} alt={name} className="User__pic" />

      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-email">{email}</p>
        <p className="User__details-status">{status}</p>
        <p className="User__details-user_id">{user_id}</p>
        <img src={profile_pic} alt={name} className="Empty__img" />
      </div>
    </div>  
  );
}, areEqual);

// Memoizes incoming props to avoid unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
// const createItemData = memoize((items, toggleItemActive) => ({
//   items,
//   toggleItemActive,
// }));
 

class List extends Component {
  constructor(props) {
    super(props);
    // Create a Ref to hold DOM node.
    this.chatsRef = React.createRef();
  }

  scrollToBottom = () => {
    // Scroll to bottom
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { users } = this.props;
    return (
      <FixedSizeList
        className="Users" ref={this.chatsRef}
        height={500}
        itemCount={users.length}
        itemSize={35}
        width={300}
        itemData={users}
      >
        {/* {
          users && users.map(user => (
            <Row user={user} key={user.user_id} />
          ))
        } */}
        {Row}
      </FixedSizeList>
    );
  }
}

export default List;