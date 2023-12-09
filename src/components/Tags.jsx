import Badge from 'react-bootstrap/Badge';

function Tags({colorBadge, textoBadge}) {
  return (
    <Badge style={{ width: '12rem'}} bg={colorBadge}>{textoBadge}</Badge> 
  );
}

export default Tags;