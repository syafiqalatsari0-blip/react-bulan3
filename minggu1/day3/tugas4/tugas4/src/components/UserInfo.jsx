export default function UserInfo() {
  return 
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">{props.user.name}</div>
    </div>
  
}
