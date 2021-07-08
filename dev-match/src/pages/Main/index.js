
import './style.css';
import ProfileBar from '../../components/ProfileBar';
import JobOpportunity from '../../components/JobOpportunity';
import ActionButtons from '../../components/ActionButtons'

function Main() {
  return (
    <div className="container-main">
      <ProfileBar />
      <JobOpportunity />
      <ActionButtons />
    </div>
  );
}

export default Main;
