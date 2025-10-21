# 📚 BestSeller Book Explorer

베스트셀러 도서를 카테고리별로 조회할 수 있는 웹 서비스
Next.js의 동적 라우팅과 API 데이터를 기반으로 책 정보를 제공합니다.
https://nextjs-bestseller-two.vercel.app/

<br/>

## ✅ 프로젝트 개요

이 프로젝트는 외부 도서 API를 기반으로 **베스트셀러 도서를 리스트/카테고리별로 조회**할 수 있게 만든 웹 애플리케이션입니다.

- Next.js의 **동적 라우팅(App Router + `useParams`)**을 활용해 `/category/[id]` 경로에 따라 데이터를 동적으로 요청합니다.
- API 응답 전 **로딩 화면(Loading UI)** 을 표시하여, 빈 화면/깜빡임 없이 대기 상태를 명확히 안내합니다.
- 느린 네트워크 상황에서도 페이지가 깨져 보이지 않도록 **UX 안정성**을 확보했습니다.

<br/>

## 📌 주요 기능

- **베스트셀러 목록 조회**: API로 받아온 도서를 카드 형태로 출력
- **카테고리별 탐색**: `/category/[id]` 동적 라우팅 + `useParams()`로 파라미터 기반 데이터 요청
- **도서 정보 표시**: 표지/제목/저자/출판사 등 핵심 정보 노출
- **로딩 UI**: API 요청 중 빈 화면 방지 및 상태 안내
- **반응형 레이아웃**: 모바일 ~ 데스크톱 자연스러운 레이아웃

<br/>

## 🛠 기술 스택

| 분야 | 사용 기술 |
|---|---|
| Framework | Next.js, TypeScript |
| Styling | Tailwindcss |
| Deploy | Vercel |
| Data | 외부 도서 API (베스트셀러/카테고리 데이터) |

<br/>

## 📅 프로젝트 정보
- Date: 2024.11 (제작 기간: 1일)
- Contribution: 디자인 100%, 개발 100%
