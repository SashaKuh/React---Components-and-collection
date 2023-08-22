import {Wrapper} from './Profile.styled'
import { Description } from '../Description/Description'; 
import { Stats } from '../Stats/Stats';

export const Profile = ({user}) => {
    return (
        <Wrapper>
            <Description items={user} />
            <Stats stats={user.stats}/>
        </Wrapper>
    );
}

