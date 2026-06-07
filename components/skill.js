import styled from "@emotion/styled";

const Skill = styled.ul`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
    padding: 0;
    margin: 1rem 0 0 0;
    list-style: none;

    li {
      position: relative;
      margin: 0;
      padding: 0.75rem 1rem 0.75rem 2rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.18);
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);

      &:before {
        content: "";
        position: absolute;
        left: 0.9rem;
        top: 50%;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 999px;
        background: linear-gradient(135deg, #38b2ac 0%, #60a5fa 100%);
        transform: translateY(-50%);
      }
    }
  }
`;

export default Skill;
