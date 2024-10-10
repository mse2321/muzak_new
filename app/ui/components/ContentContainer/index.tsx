import ErrorView from '../ErrorView';
import { useStateContext } from '../../redux/state';

const ContentContainer = (props: any) => {
    const { children } = props;
    const { state } = useStateContext();

    return (
        <>
            { children }
            { state.toggleErrorView && <ErrorView />}
        </>
    )
}

export default ContentContainer;