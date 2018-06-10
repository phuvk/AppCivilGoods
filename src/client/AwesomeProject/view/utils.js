import { StackActions, NavigationActions, withNavigation } from 'react-navigation';

export default class Utils {
    static navigate(curScreen, newScreen, canBack = true) {
        if (canBack) {
            curScreen.props.navigation.navigate(newScreen);
        } else {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: newScreen})],
            });
            curScreen.props.navigation.dispatch(resetAction);
        }
    }
}