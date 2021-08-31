import React from 'react';
import { Link } from 'react-router-dom';
import { useGames } from '@bgboard/review/data-access-games';
import { currencyFormat, ratingFormat } from '@bgboard/review/util-formatters';
import '@bgboard/review/ui-tile';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <bgboard-grid>
      {games.map(game => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <bgboard-tile>
              {game.image && (
                <bgboard-image-wrapper>
                  <img src={game.image} alt={game.name} />
                </bgboard-image-wrapper>
              )}
              <bgboard-tile-title>{game.name}</bgboard-tile-title>
              <bgboard-tile-left-corner>
                {ratingFormat(game.rating, 5)}
              </bgboard-tile-left-corner>
              <bgboard-tile-right-corner>
                {currencyFormat(game.price)}
              </bgboard-tile-right-corner>
            </bgboard-tile>
          </Link>
        );
      })}
    </bgboard-grid>
  );
};

export default ReviewFeatureList;

