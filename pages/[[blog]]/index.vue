<template>
    <h1>Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
        <ul>
            <li v-for="article in list" :key="article.id">
                <h2>
                    <nuxt-link :to="article._path">{{
                        article.title
                    }}</nuxt-link>
                </h2>
                <p>{{ article.description }}</p>
            </li>
        </ul>
    </ContentList>
</template>
