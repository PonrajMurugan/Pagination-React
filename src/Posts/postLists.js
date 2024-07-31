import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const PostLists = ({postData , loading}) => {


    return (
        loading ? 
        <div>
           Loading . . . 
        </div>
        :
        <div>
         <ListGroup>
            
            {
                postData.length > 0 &&
                postData.map((postItem , inx)=>(

               <ListGroup.Item  key={postItem.id}>
                    {inx +1 } . {postItem.title}
                </ListGroup.Item>   
             ))
                }
           

         </ListGroup>
        </div>
    );
};

export default PostLists;