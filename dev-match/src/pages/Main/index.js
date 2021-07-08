
import './style.css';
import ProfileBar from '../../components/ProfileBar';
import JobOpportunity from '../../components/JobOpportunity';
import ActionButtons from '../../components/ActionButtons';
import LogoGoogle from '../../assets/logo-google.png';



function Main() {
  return (
    <div className="container-main">

      <ProfileBar />
      <JobOpportunity
        img_url={LogoGoogle}
        name='Google'
        description='Desenvolvedor blablabla'
        requirements={['JavaScript', 'React']}
        seniority='Pleno'
        salary='5.200'
        benefits={['VA', 'VR']} />
      <ActionButtons />
    </div>
  );
}

export default Main;
