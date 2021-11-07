import styled from "@emotion/styled";

const Skill = styled.ul`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;

      &:before {
        content: "➤";
        position: absolute;
        left: 0;
        top: 6px;
        line-height: 12px;
      }
    }
  }
`;

export default Skill;
