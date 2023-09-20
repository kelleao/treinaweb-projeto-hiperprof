import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./styles";

export interface PageTiteProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTiteProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled color={"primary"}>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
