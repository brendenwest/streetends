import React from 'react';
import {Image, View} from 'react-native';

const HomeImage = () => {
    return(
        <View>
            <Image 
                source={{uri: 'https://images.squarespace-cdn.com/content/v1/5cb3ea9811f7841dcb5717fc/1555298369913-Q9NLFJNAT7X0FKJGV8HA/ke17ZwdGBToddI8pDm48kPKLbgKnVV2XjsIis1tVLxQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcifOwTvVlb9Vn5nuIYmIFbO11qUwm741v24q2qPd7-XasBTXIQVjgGWzH7eYel0iu/24787669022_282c51c56a_b.jpg?format=1000w'}} 
                style=  {{
                        width: 420, 
                        height: 230, 
                        alignSelf: 'center'
                        }} 
            />
        </View>
    )
}

export default HomeImage;
