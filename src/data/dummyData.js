export const towers = [
  { id: 1, name: "Tower A", image: "https://placehold.co/600x400?text=Tower+A" },
  { id: 2, name: "Tower B", image: "https://placehold.co/600x400?text=Tower+B" },
  { id: 3, name: "Tower C", image: "https://placehold.co/600x400?text=Tower+C" },
];

export const floors = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Floor ${i + 1}`,
}));

export const apartments = [
  // Tower 1, Floor 1
  { id: 101, towerId: 1, floorId: 1, thumbnail: "https://placehold.co/300x200?text=1BR+Floor+1", fullImage: "https://placehold.co/600x400?text=1BR+Full", area: "65 sqm", unitType: "1-Bedroom", roomCount: 1 },
  { id: 102, towerId: 1, floorId: 1, thumbnail: "https://placehold.co/300x200?text=2BR+Floor+1", fullImage: "https://placehold.co/600x400?text=2BR+Full", area: "85 sqm", unitType: "2-Bedroom", roomCount: 2 },
  
  // Tower 1, Floor 2
  { id: 201, towerId: 1, floorId: 2, thumbnail: "https://placehold.co/300x200?text=3BR+Floor+2", fullImage: "https://placehold.co/600x400?text=3BR+Full", area: "120 sqm", unitType: "3-Bedroom", roomCount: 3 },
  
  // Tower 2, Floor 1
  { id: 301, towerId: 2, floorId: 1, thumbnail: "https://placehold.co/300x200?text=Studio+Floor+1", fullImage: "https://placehold.co/600x400?text=Studio+Full", area: "45 sqm", unitType: "Studio", roomCount: 0 },
];