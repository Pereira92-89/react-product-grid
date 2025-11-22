import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from "./products.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // derive unique categories from products.json
  const categories = Array.from(
    new Set(data.map((p) => p.category).filter(Boolean))
  ).sort();

  const filtered = selectedCategory
    ? data.filter((p) => p.category === selectedCategory)
    : data;

  return (
    <div>
      {/* Category pills */}
      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
        <Chip
          label="All"
          clickable
          color={selectedCategory === null ? 'primary' : 'default'}
          variant={selectedCategory === null ? 'filled' : 'outlined'}
          onClick={() => setSelectedCategory(null)}
          sx={{ borderRadius: 999 }}
        />
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            color={selectedCategory === cat ? 'primary' : 'default'}
            variant={selectedCategory === cat ? 'filled' : 'outlined'}
            onClick={() => setSelectedCategory((c) => (c === cat ? null : cat))}
            sx={{ borderRadius: 999 }}
          />
        ))}
      </Stack>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {filtered.map((product) => (
          <Card key={product.id ?? product.name ?? Math.random()} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image ?? "/alens.jpeg"}
              title={product.title ?? product.name ?? "Product"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title ?? product.name ?? "Lizard"}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description ?? product.desc ?? "No description available."}
              </Typography>

              <Typography variant="body1" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                ${product.price ? product.price.toFixed(2) : 'Price not available'}
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">{product.category}</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}


export default App
