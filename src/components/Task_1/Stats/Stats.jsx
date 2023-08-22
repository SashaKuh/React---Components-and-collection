import { StyledStats } from "./Stats.styled"
import { Followers } from "../Followers/Followers"
import { Likes } from "../Likes/Likes"
import { Views } from "../Views/Views"

export const Stats = ({ stats }) => {
  return (
    <StyledStats>
      <Followers followers={stats.followers} />
      <Views views={stats.views} />
      <Likes likes={stats.likes} />
    </StyledStats>
  )
  }
