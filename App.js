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
import { fromJS } from 'immutable'
import { mock } from './mock'

type Props = {};
type State = {
  timeElapsed: number,
  timeElapsed2: number,
  loading: boolean
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this._run = this._run.bind(this)
    this._run2 = this._run2.bind(this)
    this.state = {
      timeElapsed: 0,
      timeElapsed2: 0,
      timeElapsed3: 0,
      timeElapsed4: 0,
      loading: false
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
      setTimeout(() => {
        const begin = new Date()
        const t = ret.toJS()
        const end = new Date()
        const timeElapsed2 = end.getTime() - begin.getTime()
        this.setState({
          timeElapsed2
        })
      }, 3000)
    })
  }
  _run2() {
    const members = mock.members
    const now = new Date()
    const member = members.find(m => m.user._id === '64f5e4b5-c106-4076-824a-3b826972e999')
    console.log('>>> test by Hays 1. ', member)
    const after = new Date()
    const timeElapsed3 = after.getTime() - now.getTime()
    this.setState({
      timeElapsed3
    }, () => {
      setTimeout(() => {
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
      }, 3000)
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
