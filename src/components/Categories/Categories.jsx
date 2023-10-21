import React from "react";
import { CircularProgress, Card, CardContent, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (
        <div className="container">
          <Typography variant="h2" sytle={{ color: "#B0578D" }}>
            Categorias
          </Typography>
          {data.map((category) => (
            <Card key={category.id}>
              <CardContent component={Link} to={`/category/${category.category}`}>
                <Typography>{category.category}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
    );
}

export default Categories;