<template>
  <div id="contact" class="section">
    <div class="contact_wrapper">
      <h1>Contactformulier</h1>
      <p>Gebruik dit formulier om contact met ons op te nemen</p>
      <form class="contact_form">
        <label>Aanhef</label>
        <select name="aanhef">
          <option value="dhr.">Dhr.</option>
          <option value="mevr.">Mevr.</option>
        </select>

        <label>Naam</label>
        <input type="text" placeholder required>

        <label>E-mailadres</label>
        <input type="email" placeholder required>

        <label>Telefoonnummer</label>
        <input type="tel" placeholder required>

        <label>Onderwerp</label>
        <input type="text" id="input_onderwerp" placeholder required>

        <label>Uw bericht</label>
        <textarea type="text" id="input_bericht" placeholder required></textarea>
        <br>
        <input type="checkbox">
        <p>Aanmelden voor nieuwsbrief?</p>
        <button type="submit">Verzenden</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>

<style scoped>
.contact_wrapper
{
    text-align: center;
    display: block;
    margin: auto;
    width: 100%;
    max-width: 800px;
    min-height: 300px;
    margin-bottom: 20px;
    padding-top: 15px;
}

.contact_form
{
    margin: 0px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-align: baseline;
    max-width: 70%;
}

.contact_form input, .contact_form textarea, .contact_form select
{
    min-height: 30px;
    background-color: #aaa;
    margin-top: 5px;
    padding-left: 10px;
    width: 100%;
    border: 0px;
}


.contact_form #input_onderwerp
{
    width: 100%;
}

.contact_form #input_bericht
{
    width: 100%;
    height: 130px;
    margin-bottom: 20px;
}

.contact_form button, .leden_container button
{
    background-color: #065471;
    color: rgb(255, 194, 68);
    width: 100%;
    font-size: 1.3em;
    padding: 10px 0px;
}

.contact_form input[type=checkbox]
{
    width: 20px;
    cursor: pointer;
}

.section {
    padding-bottom: 70px;
    background: #eee;
}

.contact_form label
{
    text-align: left;
    margin-left: 0px;
    width: 100%;
    padding-top: 10px;
}

form > p {
    margin: 9px 0px;
    display: inline-block;
}

@media screen and (max-width: 767px) {
    .contact_wrapper
    {
        width: 100%;
    }

    .contact_form input,
    .contact_form select,
    .contact_form textarea,
    .contact_form button
    {
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
    }

    .contact_form
    {
        max-width: 100%;
    }

    .contact_form label
    {
        text-align: left;
        margin-left: 20px;
        width: 100%;
        padding-top: 20px;
    }
}
</style>
