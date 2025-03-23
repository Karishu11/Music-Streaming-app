package com.musicapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "song")  // ✅ Ensures the table is correct
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String artist;
    private String album;
    private String genre;
    private String url; // Streaming URL
}
