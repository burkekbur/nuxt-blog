<template>
    <header>
        <NuxtLink to="/">Home</NuxtLink>

        <nav>
            <ul>
                <li><NuxtLink to="/html-page">HTML</NuxtLink></li>
                <li><NuxtLink to="/markdown-page">Markdown</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    padding: 1rem;
    background: #bada55;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
}
a {
    text-decoration: none;
    color: inherit;
}
</style>
