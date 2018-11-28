import React from 'react';
import { View, Text } from 'react-native';
import { FlatList, Image } from 'react-native';

export default class TipsView extends React.Component {
    render() {
        return (
          <View style={{width: undefined}}>
            <FlatList
              style={{flexGrow: 0}}
              scrollEnabled={'false'}
              data={[
                {key: 'Tip1', TipIcon: require('./assets/tip1.png') ,TipDescription: 'Find good lighting, not too bright or dark.'},
                {key: 'Tip2', TipIcon: require('./assets/tip2.png') , TipDescription: 'Frame the pet\'s face in the center of the photo facing the camera.'},
                {key: 'Tip3', TipIcon: require('./assets/tip3.png') , TipDescription: 'Make sure the pet\'s face is in focus.'},
                {key: 'Tip4', TipIcon: require('./assets/tip4.png') , TipDescription: 'Take your photos!'},
              ]}
              renderItem={({item}) => 
                   <View style={{flexDirection: 'row'}}>
                    <Image 
                        style={{ width: 30, height: 30, margin: 5}}
                        source={item.TipIcon}/>
                    <View style = {{flex: 1, justifyContent: 'center'}}> 
                      <Text style = {{flexWrap: 'wrap'}}>{item.TipDescription}</Text>
                    </View>
                  </View>
              }
            />
            <View style={{width: undefined, aspectRatio: 9/4}}>
              <View style={{paddingBottom: 10, paddingTop: 10, paddingLeft: 5}}> 
                <Text>{'Here are examples of good photos!'}</Text>
              </View>
    
              <View style={{flex: 1, alignItems:'center', flexDirection: 'row'}}>
                      <Image 
                          style={{flex: 1, resizeMode: 'contain', margin: 5}}
                          source={require('./assets/tipdog1.png')}/>
                      <Image 
                          style={{flex: 1, resizeMode: 'contain', margin: 5}}
                          source={require('./assets/tipdog2.png')}/>
                      <Image 
                          style={{flex: 1, resizeMode: 'contain', margin: 5}}
                          source={require('./assets/tipdog3.png')}/>
              </View>
            </View>
          </View>
        );
    }
}