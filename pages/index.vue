<template>
    <h1>Úvodní stránka v Nuxtu</h1>
    <p>
        Dokumentace je na stránce
        <a href="https://nuxt.com/">https://nuxt.com/</a>
    </p>
    <ContentDoc>
        <template #empty>
            <h1>Document je prázdný</h1>
        </template>
        <template #not-found> </template>
    </ContentDoc>
</template>
