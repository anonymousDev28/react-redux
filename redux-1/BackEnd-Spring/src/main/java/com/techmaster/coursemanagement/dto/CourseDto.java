package com.techmaster.coursemanagement.dto;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.techmaster.coursemanagement.model.User;
import lombok.*;

import java.io.IOException;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CourseDto {
    private Integer id;
    private String name;
    private String description;
    private String type;
    private String thumbnail;
    private Integer price;
    private Double rating;
    private User user;
//    private List<Category> categoriesName;
    public CourseDto(Integer id, String name, String description, String type, String thumbnail, Integer price, Double rating, Object user) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.thumbnail = thumbnail;
        this.price = price;
        this.rating = rating;
//        this.categories = categories;
        // Sử dụng Jackson để conver từ chuỗi JSON -> Object
        if (user != null) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                this.user = mapper.readValue((String) user, User.class);
            } catch (IOException e) {
                this.user = null;
            }
        }
//        if(categories.size() > 0){
//            ObjectMapper mapper = new ObjectMapper();
//            List<Category> categoryNameList = categories.stream()
//                    .map(category -> {
//                        try {
//                            return mapper.readValue((String)category, Category.class);
//                        } catch (JsonProcessingException e) {
//                            e.printStackTrace();
//                        }
//                        return null;
//                    })
//                    .collect(Collectors.toList());
//            this.categoriesName = categoryNameList;
//        }

    }
}