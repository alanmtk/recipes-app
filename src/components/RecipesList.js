import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipesList = ({ recipes }) => (
  <table>
    <thead>
      <tr>
        <th>Receta</th>
        <th>Puntaje</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map(({ id, name, rate }) => (
        <tr key={id}>
          <td>
            <Link to={`/recetas/${id}`}>{name}</Link>
          </td>
          <td>{rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rate: PropTypes.number,
  })).isRequired,
};

export default RecipesList;
