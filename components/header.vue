<template>
    <header>
        <a href="/">Home</a>

        <nav>
            <ul>
                <li><a href="/html-page">HTML</a></li>
                <li><a href="/markdown-page">Markdown</a></li>
                <li><a href="/blog">Blog</a></li>
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
