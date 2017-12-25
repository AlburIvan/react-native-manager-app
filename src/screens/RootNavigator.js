import { StackNavigator } from 'react-navigation';
import LoginFormScreen from './LoginFormScreen';
import EmployeeListScreen from './EmployeeListScreen';

const RootNavigator = StackNavigator({
    Login: { 
        screen: LoginFormScreen,
        navigationOptions: {
            header: null
        }
    },
    EmployeeList: { 
        screen: EmployeeListScreen,
        navigationOptions: {
            headerTitle: 'Employee List',
            headerLeft: null
        }
    }
});

export default RootNavigator;