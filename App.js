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
    this.state = {
      timeElapsed: 0,
      timeElapsed2: 0,
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
  render() {
    return (
      <View style={styles.container}>
        <Text>{`fromJS run time elapsed: ${this.state.timeElapsed}`}</Text>
        <Text>{`toJS run time elapsed: ${this.state.timeElapsed2}`}</Text>
        <Button title='Run' onPress={this._run} />
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
