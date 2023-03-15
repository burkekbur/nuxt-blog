<template>
    <h1>Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
        <ul>
            <li v-for="article in list" :key="article.id">
                <h2>
                    <a :href="article._path">{{ article.title }}</a>
                </h2>
                <p>{{ article.description }}</p>
            </li>
        </ul>
    </ContentList>
</template>
