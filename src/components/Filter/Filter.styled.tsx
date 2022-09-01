import styled from "@emotion/styled";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

type Label = {
  htmlFor: string;
};

export const FilterLabel = styled.div<Label>`
  margin-right: 12px;

  white-space: nowrap;
  font-weight: 600;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding-left: 6px;
  border-bottom: 1px solid #505050;
`;
