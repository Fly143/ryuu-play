import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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
import { commonEffects } from '../../../common';

export class GardevoirTG05 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 140;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shining Arcana", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 2 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Put the other cards into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Brainwave", cost: [], damage: "60+", text: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Gardevoir";
  public fullName: string = "Gardevoir ASR TG05";
  public text: string = "Gardevoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
