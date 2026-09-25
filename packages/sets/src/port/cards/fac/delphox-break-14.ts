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
import { commonEffects } from '../../../common';

export class DelphoxBREAK_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Delphox";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flare Witch", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "FAC";
  public name: string = "Delphox BREAK";
  public fullName: string = "Delphox BREAK FAC 14";
  public text: string = "Delphox BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
