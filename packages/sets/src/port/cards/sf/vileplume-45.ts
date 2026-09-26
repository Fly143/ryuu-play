import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Vileplume_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Reaction", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you attach a Grass or Psychic Energy card from your hand to Vileplume (excluding effects of attacks or Poké-Powers), you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Asleep. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Disturbing Pollen", cost: [], damage: "60", text: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn." }
  ];
  public set: string = "SF";
  public name: string = "Vileplume";
  public fullName: string = "Vileplume SF 45";
  public text: string = "Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
