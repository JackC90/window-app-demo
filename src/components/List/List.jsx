import React, { Component } from "react";
import "./List.css";
import { FixedSizeList } from "react-window";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

// If list items are expensive to render,
// Consider using React.memo or shouldComponentUpdate to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactmemo
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = ({ data, index, style }) => {
  const user = data[index];
  const { name, email, profile_pic, status, user_id } = user;
  return (
    <div className="User" style={style} key={user_id}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="User">
              {index + 1}
            </Avatar>
          }
          title={name}
          subheader={email}
        />
        <CardMedia
          title={name}
        >
          <img src={profile_pic} alt={name} className="User__img-frame"/>
        </CardMedia>
        <CardContent>
          <p className="User__details-status">{status}</p>
        </CardContent>
      </Card>
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