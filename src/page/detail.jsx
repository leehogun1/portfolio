import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 메인 페이지와 일치하는 스타일 정의
const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 20px;
  color: #1a1a1a;
  font-family: 'Pretendard', -apple-system, sans-serif;
  line-height: 1.8;
`;

const Header = styled.header`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #1a1a1a;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const TitleGroup = styled.div`
  h1 { font-size: 2.5rem; margin: 0; font-weight: 800; }
  p { font-size: 1.1rem; color: #666; margin-top: 10px; }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 15px;
  a {
    padding: 8px 16px;
    border: 1px solid #1a1a1a;
    text-decoration: none;
    color: #1a1a1a;
    font-weight: 600;
    transition: all 0.3s;
    &:hover { background: #1a1a1a; color: #fff; }
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
  h2 { font-size: 1.5rem; border-left: 4px solid #1a1a1a; padding-left: 15px; margin-bottom: 25px; }
`;

const TechTag = styled.span`
  background: #f4f4f4;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-right: 10px;
  font-weight: 500;
`;

const TroubleBox = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #eee;

  .step { margin-bottom: 20px; }
  .label { font-weight: 800; color: #000; display: block; margin-bottom: 5px; }
  .highlight { color: #007bff; font-weight: 700; } /* 해결 방법 강조색 */
`;

const ProjectDetail = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DetailContainer>
      {/* 1. 헤더 영역 */}
      <Header>
        <TitleGroup>
          <h1>문화유산 통합 정보 플랫폼</h1>
          <p>문화재청 공공 API 기반 데이터 통합 시각화 서비스</p>
        </TitleGroup>
        <LinkGroup>
          <HashLink smooth to="/#project-sec">
            포트폴리오 ↗
          </HashLink>
          <a href="https://heritagestory.co.kr/" target="_blank" rel="noreferrer">사이트 방문 ↗</a>
        </LinkGroup>
      </Header>

      {/* 2. 프로젝트 개요 */}
      <Section>
        <h2>Project Overview</h2>
        <p>
          문화재청 공공 API를 기반으로 문화유산 데이터를 수집·정제하여 지도, 게시판, 뉴스, 반환 연표 형태로 제공하는 통합 플랫폼입니다.
          어렵게 느껴질 수 있는 문화유산을 일상 속에서 자연스럽게 접할 수 있도록 하여 사용자들의 관심을 높이는 것을 목표로 제작되었습니다.
        </p>
      </Section>

      {/* 3. 역할 및 기술 스택 */}
      <Section>
        <h2>My Role & Skills</h2>
        <div style={{ marginBottom: '20px' }}>
          <strong>담당 역할:</strong> 프론트엔드 개발 (UI 구현, 비동기 API 연동, 성능 최적화)
        </div>
        <div>
          {['HTML', 'CSS', 'JavaScript', 'Thymeleaf', 'Axios'].map(tech => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </Section>

      {/* 4. 핵심 트러블 슈팅 (가장 중요) */}
      <Section>
        <h2>Troubleshooting</h2>
        <TroubleBox>
          <div className="step">
            <span className="label">문제상황</span>
            <p>외부 API에서 XML 파싱을 통해 이미지를 가져오는 과정에서 로딩 속도가 현저히 느려 사용자 경험이 저해됨.</p>
          </div>
          <div className="step">
            <span className="label">분석</span>
            <p>데이터 호출 과정보다 외부 이미지 서버와 연결을 맺는 <strong>Handshake 지연 시간</strong>이 병목 구간임을 확인.</p>
          </div>
          <div className="step">
            <span className="label">해결방법</span>
            <p className="highlight">
              HTML &lt;link&gt; 태그의 <strong>preconnect</strong> 속성을 적용.
              이미지를 불러오기 전 서버와 미리 연결을 설정하여 DNS, TCP, TLS 왕복 시간을 단축함.
            </p>
          </div>
          <div className="step" style={{ marginBottom: 0 }}>
            <span className="label">결과</span>
            <p>불필요한 대기 시간을 제거하여 실제 체감 로딩 속도를 대폭 개선하고 매끄러운 화면 렌더링을 구현함.</p>
          </div>
        </TroubleBox>
      </Section>
    </DetailContainer>
  );
};

export default ProjectDetail;