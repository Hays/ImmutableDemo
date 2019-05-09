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
  timeElapsed10: number
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this._run = this._run.bind(this)
    this._run2 = this._run2.bind(this)
    this._run3 = this._run3.bind(this)
    this._run4 = this._run4.bind(this)
    this._run5 = this._run5.bind(this)
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
      timeElapsed10: 0
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
