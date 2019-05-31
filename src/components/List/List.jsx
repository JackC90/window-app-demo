import React, { Component } from "react";
import "./List.css";
import { FixedSizeList } from "react-window";

// If list items are expensive to render,
// Consider using React.memo or shouldComponentUpdate to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactmemo
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = ({ data, index, style }) => {
  const user = data[index];
  const { name, email, profile_pic, status, user_id } = user;
  return (
    <div className="User" style={style} key={user_id}>
      <div className="User__details">
        <div className="User__img-frame">
          <img src={profile_pic} alt={name} className="User__img" />
        </div>
        <p className="User__details-name">{name}</p>
        <p className="User__details-email">{email}</p>
        <p className="User__details-status">{status}</p>
        <p className="User__details-user_id">{index} - {user_id}</p>
      </div>
    </div>
  );
};

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

  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  render() {
    const { users } = this.props;
    return (
      <FixedSizeList
        className="Users" ref={this.chatsRef}
        height={500}
        itemCount={users.length}
        itemSize={280}
        width={600}
        itemData={users}
      >
        {Row}
      </FixedSizeList>
    );
  }
}

export default List;