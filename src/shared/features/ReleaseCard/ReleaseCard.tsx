import React, { ReactElement } from 'react';
import { ReleaseInfo } from 'src/apiCalls/release';
import { CardContentWrapper } from 'src/shared/components/Card/CardContentWrapper.css';
import { CardItem } from 'src/shared/components/Card/CardItem.css';
import { CardItemWrapper } from 'src/shared/components/Card/CardItemWrapper.css';
import { CardSubTitle } from 'src/shared/components/Card/CardSubTitle.css';
import { CardTitle } from 'src/shared/components/Card/CardTitle.css';
import { CardImageCover } from 'src/shared/components/Card/CardImageCover.css';

/**
 * This component is used as a Release Card component, to show Release details
 */
const ReleaseCard = ({
  id,
  coverImg,
  country,
  year,
  title,
}: ReleaseInfo): ReactElement => {
  return (
    <CardItemWrapper key={id}>
      <CardItem>
        <CardContentWrapper>
          <CardImageCover
            src={coverImg}
            alt={title}
            loading="lazy"
          ></CardImageCover>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>
            {country} - {year}
          </CardSubTitle>
        </CardContentWrapper>
      </CardItem>
    </CardItemWrapper>
  );
};

export default ReleaseCard;
