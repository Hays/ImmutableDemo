/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { fromJS, Map, List } from 'immutable'
import isEqual from 'lodash.isequal'
import { mock } from './mock'

type Props = {};
type State = {
  timeElapsed: number,
  timeElapsed2: number,
  timeElapsed3: number,
  timeElapsed4: number,
  timeElapsed5: number,
  timeElapsed6: number,
  timeElapsed7: number,
  timeElapsed8: number,
  timeElapsed9: number,
  timeElapsed10: number,
  timeElapsed11: number,
  timeElapsed12: number,
  timeElapsed13: number,
  timeElapsed14: number,
  timeElapsed15: number,
}
export default class App extends Component<Props, State> {
  _mockMembers2: Array<any>
  constructor(props: Props) {
    super(props)
    this._run = this._run.bind(this)
    this._run2 = this._run2.bind(this)
    this._run3 = this._run3.bind(this)
    this._run4 = this._run4.bind(this)
    this._run5 = this._run5.bind(this)
    this._run6 = this._run6.bind(this)
    this._run7 = this._run7.bind(this)
    this._run8 = this._run8.bind(this)
    this._mockMembers2 = []
    for (let i = 0; i < 1212; i++) {
      this._mockMembers2.push((
        {
          "user": {
            "staffId": null,
            "avatar": "",
            "displayName": "董**",
            "jobTitle": "***",
            "createTime": 1556452770000,
            "_id": "49efbfbd-626d-efbf-bd76-4be59a96efbf",
            "systemId": "49efbfbd-626d-efbf-bd76-4be59a96efbf",
            "email": "***",
            "mobile": "185****5511",
            "department": "***",
            "company": "***"
          },
          "meeting": "010578977201904280001",
          "repeatMeeting": i,
          "createTime": (1556452770000 + i),
          "state": 2,
          "from": i,
          "revoker": null,
          "invitor": {
            "staffId": null,
            "avatar": "",
            "displayName": "刘鹏飞",
            "jobTitle": "web后台应用软件工程师",
            "createTime": 1556452770000,
            "_id": "e449ea73-268f-4817-a16e-9eadbbc1b7ea",
            "systemId": "e449ea73-268f-4817-a16e-9eadbbc1b7ea",
            "email": "liupengfei@cvte.com",
            "mobile": "18578240049",
            "department": "前端",
            "company": "广州视臻1602"
          }
        }
      ))
    }
    this.state = {
      timeElapsed: 0,
      timeElapsed2: 0,
      timeElapsed3: 0,
      timeElapsed4: 0,
      timeElapsed5: 0,
      timeElapsed6: 0,
      timeElapsed7: 0,
      timeElapsed8: 0,
      timeElapsed9: 0,
      timeElapsed10: 0,
      timeElapsed11: 0,
      timeElapsed12: 0,
      timeElapsed13: 0,
      timeElapsed14: 0,
      timeElapsed15: 0,
    }
  }
  _run() {
    console.log('>>> test by Hays ... ')
    const now = new Date()
    const ret = fromJS(mock)
    const after = new Date()
    const timeElapsed = after.getTime() - now.getTime()
    this.setState({
      timeElapsed
    }, () => {
      const begin = new Date()
      const t = ret.toJS()
      const end = new Date()
      const timeElapsed2 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed2
      })
    })
  }
  _run2() {
    const members = mock.members
    const now = new Date()
    const member = members.find(m => m.user._id === '64f5e4b5-c106-4076-824a-3b826972e999')
    const after = new Date()
    console.log('>>> test by Hays 1. ', member)
    const timeElapsed3 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed3
    }, () => {
      const data = fromJS(mock)
      const begin = new Date()
      const list = data.get('members')
      const find = list.find(m => m.getIn(['user', '_id']) === '64f5e4b5-c106-4076-824a-3b826972e999')
      console.log('>>> test by Hays 2. ', find)
      const end = new Date()
      const timeElapsed4 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed4
      })
    })
  }
  _run3() {
    const members = mock.members
    const now = new Date()
    const newMembers = [...members]
    const after = new Date()
    const timeElapsed5 = after.getTime() - now.getTime()
    if (members === newMembers) {
      console.log('>>> test by Hays 3 ... ')
    }
    this.setState({
      timeElapsed5
    }, () => {
      const begin = new Date()
      const test = members.map(m => Map(m))
      const end = new Date()
      const timeElapsed6 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed6
      })
    })
  }

  _run4() {
    const members = mock.members
    const now = new Date()
    const newMembers = members.map(m => ({ ...m }))
    const after = new Date()
    const timeElapsed7 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed7
    }, () => {
      const begin = new Date()
      const test = List(members)
      const end = new Date()
      const timeElapsed8 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed8
      })
    })
  }

  _run5() {
    const members = mock.members
    const member = { ...members[701] }
    // const newMembers = members.map(m => ({ ...m }))
    const now = new Date()
    members.forEach(m => {
      isEqual(m, member)
    })
    const after = new Date()
    const timeElapsed9 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed9
    }, () => {
      const begin = new Date()
      let ret = Map()
      members.forEach(m => {
        ret = ret.set(m.user._id, m)
      })
      const end = new Date()
      const timeElapsed10 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed10
      })
    })
  }
  _run6() {
    const members = mock.members
    const members2 = this._mockMembers2
    const now = new Date()
    const newMembers = members.map((m, i) => {
      const ret = { ...m,  ...members2[i] }
      if (isEqual(m, ret)) {
        return m
      } else {
        return ret
      }
    })
    const after = new Date()
    const timeElapsed11 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed11
    }, () => {
      const test = List(members)
      const begin = new Date()
      const findIndex = test.find(m => m.user._id === 'efbfbd20-2e16-efbf-bd43-43efbfbdefbf')
      const newTest = test.update(findIndex, m => {
        const ret = ({...m, from: 99999})
        if (isEqual(m, ret)) {
          return m
        }
        return ret
      })
      const end = new Date()
      const timeElapsed12 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed12
      })
    })
  }
  _run7() {
    const members = mock.members.map(m => Map(m))
    let map = Map()
    members.forEach(m => {
      map = map.set(m.get('user')._id, m)
    })
    const now = new Date()
    this._mockMembers2.forEach(m => {
      const member = Map(m)
      const old = map.get(m.user._id)
      const from = old.get('from')
      const createTime = old.get('createTime')
      map = map.set(m.user._id, member.set('from', from).set('createTime', createTime))
    })
    const after = new Date()
    const timeElapsed13 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed13
    })
  }
  _run8() {
    const members = mock.members.map(m => Map(m))
    let map = Map()
    members.forEach(m => {
      map = map.set(m.get('user')._id, m)
    })
    const now = new Date()
    for (let i = 0; i < 1000; i++) {
      const old = map.get('efbfbd20-2e16-efbf-bd43-43efbfbdefbf')
      map = map.set('efbfbd20-2e16-efbf-bd43-43efbfbdefbf', old.set('from', 999))
    }
    const after = new Date()
    const timeElapsed14 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed14
    }, () => {
      const begin = new Date()
      const arr = map.toArray()
      const end = new Date()
      const timeElapsed15 = end.getTime() - begin.getTime()
      this.setState({
        timeElapsed15
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{`fromJS run time elapsed: ${this.state.timeElapsed} ms`}</Text>
        <Text>{`toJS run time elapsed: ${this.state.timeElapsed2} ms`}</Text>
        <Button title='Run1' onPress={this._run} />
        <Text>{`Array find time elapsed: ${this.state.timeElapsed3} ms`}</Text>
        <Text>{`List find time elapsed: ${this.state.timeElapsed4} ms`}</Text>
        <Button title='Run2' onPress={this._run2} />
        <Text>{`array destructure time elapsed: ${this.state.timeElapsed5} ms`}</Text>
        <Text>{`Array<Object> to Array<Map> time elapsed: ${this.state.timeElapsed6} ms`}</Text>
        <Button title='Run3' onPress={this._run3} />
        <Text>{`object destructure time elapsed: ${this.state.timeElapsed7} ms`}</Text>
        <Text>{`Array to List time elapsed: ${this.state.timeElapsed8} ms`}</Text>
        <Button title='Run4' onPress={this._run4} />
        <Text>{`object equal check 1212 times time elapsed: ${this.state.timeElapsed9} ms`}</Text>
        <Text>{`Array to Map time elapsed: ${this.state.timeElapsed10} ms`}</Text>
        <Button title='Run5' onPress={this._run5} />
        <Text>{`object destructure & equal check 1212 times time elapsed: ${this.state.timeElapsed11} ms`}</Text>
        <Text>{`update list time elapsed: ${this.state.timeElapsed12} ms`}</Text>
        <Button title='Run6' onPress={this._run6} />
        <Text>{`Map merge time elapsed: ${this.state.timeElapsed13} ms`}</Text>
        <Button title='Run7' onPress={this._run7} />
        <Text>{`Map update time elapsed: ${this.state.timeElapsed14} ms`}</Text>
        <Text>{`map to array time elapsed: ${this.state.timeElapsed15} ms`}</Text>
        <Button title='Run7' onPress={this._run8} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
